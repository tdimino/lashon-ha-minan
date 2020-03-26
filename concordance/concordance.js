/*
# Copyright (c) 2019 Robert Hogan (robhogan at gmail.com) All rights reserved.
#
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions are
# met:
#
#    * Redistributions of source code must retain the above copyright
# notice, this list of conditions and the following disclaimer.
#    * Redistributions in binary form must reproduce the above
# copyright notice, this list of conditions and the following disclaimer
# in the documentation and/or other materials provided with the
# distribution.
#    * Neither the name of Google Inc. nor the names of its
# contributors may be used to endorse or promote products derived from
# this software without specific prior written permission.
#
# THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
# "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
# LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
# A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
# OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
# SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
# LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
# DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
# THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
# (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
# OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var activeContainer = null;

// Concordance
function loadWords(inscription, type, container) {
  inscription.tracingImages.forEach( image => {
    var img = new Image();
    img.src = "../" + encodeURIComponent(image);
    if (["word", "number", "ideogram"].includes(type)) {
      img.addEventListener("load", addWordImagesToConcordance(img, image, inscription, type, container));
    } else if (["letter"].includes(type)) {
      img.addEventListener("load", addLetterImagesToConcorance(img, image, inscription, container));
    }
  });
}

function shouldIncludeWord(word, type, tagsForWord) {
  if (word == '—') {
    return false;
  }
  if (tagsForWord.includes(type)) {
    return true;
  }
  var splitter = new GraphemeSplitter();
  var letters = splitter.countGraphemes(word);
  if (type == "ideogram" && !tagsForWord.includes("number") && letters == 1) {
    return true;
  }
  if (type == "word" && letters > 1 && !tagsForWord.includes("number")) {
    return true;
  }
  if (type == "letter" && !tagsForWord.includes("number")) {
    return true;
  }
  return false;
}

function lettersWithImages(parsedInscription) {
  var splitter = new GraphemeSplitter();
  var letters = stripErased(parsedInscription);
  letters = letters.replace(/\n/gu, "");
  letters = letters.replace(/𐄁/gu, "");
  return splitter.splitGraphemes(letters);
}

function isNumber(character) {
  var unicode = character.codePointAt(0);
  if (unicode < 65792 || unicode > 65855) {
    return false;
  }
  return true;
}

function addLetterImagesToConcorance(img, image, inscription, container) {
  return function (e) {
    if (!coordinates.has(image)) {
      return;
    }
    var imageCoords = coordinates.get(image);
    var item = null;
    var span = null;
    var letters = lettersWithImages(inscription.parsedInscription);
    var addedLabels = [];
    var concordanceItem = null;
    for (var i = 0; i < imageCoords.length; i++) {
      var area = imageCoords[i].coords;
      var word = letters[i];

      if (isNumber(word) || word == '—') {
        continue;
      }

      item = document.getElementById(word);
      if (!item) {
        var item = document.createElement("div");
        item.className = 'item-container concordance-item-container';
        item.id = word;

        var label = document.createElement("div");
        label.className = "label";
        label.textContent = word;
        item.appendChild(label);
        container.appendChild(item);
      }
      concordanceItem = document.createElement("div");
      concordanceItem.className = "concordance-item";
      item.appendChild(concordanceItem);
      if (!addedLabels.includes(word)) {
        span = document.createElement("span");
        span.className = "concordance-label";
        span.textContent = inscription.name;
        concordanceItem.appendChild(span);
        addedLabels.push(word);
      }
      span = document.createElement("span");
      concordanceItem.appendChild(span);

      var canvas = document.createElement('canvas');
      canvas.height = 40;
      canvas.width = 40 * (area.width / area.height);
      span.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, area.x, area.y, area.width, area.height, 0, 0, canvas.width, canvas.height);
    }
  };
}

function addWordImagesToConcordance(img, image, inscription, type, container) {
  return function (e) {
    if (!coordinates.has(image)) {
      return;
    }
    var imageCoords = coordinates.get(image);
    var currentWord = 0;
    var prevWord = -1;
    var item = null;
    var span = null;
    var letters = lettersWithImages(inscription.parsedInscription);
    for (var i = 0; i < imageCoords.length; i++) {
      var area = imageCoords[i].coords;
      currentWord = wordIndexForLetterIndex(inscription.name, i, currentWord);

      var tagsForWord = inscription.wordTags[currentWord];
      var word = stripErased(inscription.words[currentWord]);
      if (!shouldIncludeWord(word, type, tagsForWord)) {
        prevWord = currentWord;
        continue;
      }

      if (currentWord != prevWord) {
        item = document.getElementById(word);
        if (!item) {
          var item = document.createElement("div");
          item.className = 'item-container concordance-item-container';
          item.id = word;

          var label = document.createElement("div");
          label.className = "label";
          label.textContent = word;
          item.appendChild(label);
          container.appendChild(item);
        }
        var concordanceItem = document.createElement("div");
        concordanceItem.className = "concordance-item";
        var span = document.createElement("span");
        span.className = "concordance-label";
        span.textContent = inscription.name;
        concordanceItem.appendChild(span);
        span = document.createElement("span");
        concordanceItem.appendChild(span);
        item.appendChild(concordanceItem);
      }
      prevWord = currentWord;

      var canvas = document.createElement('canvas');
      canvas.height = 40;
      canvas.width = 40 * (area.width / area.height);
      span.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      ctx.drawImage(img, area.x, area.y, area.width, area.height, 0, 0, canvas.width, canvas.height);
    }
  };
}

function loadConcordance(evt, type) {

  Array.prototype.map.call(document.getElementsByClassName("filters-container")[0]
   .getElementsByClassName("filter-command"), x => x.style.backgroundColor = "black");
  evt.target.style.backgroundColor = "purple";

  activeContainer.style.display = "none";

  var container = document.getElementById(type + "-container");
  if (container) {
    container.style.display = "block";
    activeContainer = container;
    return;
  }

  container = document.createElement("div");
  container.id = type + "-container";
  document.body.appendChild(container);
  activeContainer = container;

  for (var inscription of inscriptions.values()) {
    loadWords(inscription, type, container);
  }
  concordances.push(type);
}

var concordances = [];
function initializeConcordance() {
  loadInscriptionLevelTags();
  loadAnnotations();
  container = document.createElement("div");
  container.id = "word-container";
  document.body.appendChild(container);
  activeContainer = container;

  for (var inscription of inscriptions.values()) {
    loadWords(inscription, "word", container);
  }
  concordances.push("word");
}