// Generated by CoffeeScript 1.6.3
var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

$(function() {
  var candidates, issues, renderQuotes;
  $("#slides").superslides({
    hashchange: true
  });
  $(".modal-link").leanModal();
  $(".nav-link").click(function(e) {
    var target;
    target = $(e.target);
    switch (target.closest(".page").attr("id")) {
      case "main":
        return $("#slides").superslides("animate", (target.attr("data-target") === "candidates" ? "prev" : "next"));
      case "candidates":
        return $("#slides").superslides("animate", "next");
      case "issues":
        return $("#slides").superslides("animate", "prev");
    }
  });
  issues = [];
  candidates = [];
  renderQuotes = function() {
    var candidate, issue, q, _i, _j, _len, _len1, _ref, _ref1;
    $("#quotes").hide();
    if (!issues.length && !candidates.length) {
      _ref = $("#quotes").children();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        q = _ref[_i];
        $(q).show();
      }
    } else {
      _ref1 = $("#quotes").children();
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        q = _ref1[_j];
        $(q).show();
        issue = $(q).attr("data-issue");
        candidate = $(q).attr("data-candidate");
        if (!(__indexOf.call(issues, issue) >= 0) && issues.length) {
          $(q).hide();
        }
        if (!(__indexOf.call(candidates, candidate) >= 0) && candidates.length) {
          $(q).hide();
        }
      }
    }
    return $("#quotes").fadeIn();
  };
  $(".issue").click(function(e) {
    var id, target;
    target = $(e.target);
    id = target.attr("name");
    target.toggleClass("selected");
    if (target.hasClass("selected")) {
      issues.push(id);
    } else {
      issues = issues.filter(function(x) {
        return x !== id;
      });
    }
    return renderQuotes();
  });
  $(".candidate").click(function(e) {
    var id, target;
    target = $(e.target);
    id = target.attr("name");
    target.toggleClass("selected");
    if (target.hasClass("selected")) {
      candidates.push(id);
    } else {
      candidates = candidates.filter(function(x) {
        return x !== id;
      });
    }
    return renderQuotes();
  });
  $(".clear-issues").click(function() {
    issues = [];
    $(".issue").removeClass("selected");
    return renderQuotes();
  });
  return $(".clear-candidates").click(function() {
    candidates = [];
    $(".candidate").removeClass("selected");
    return renderQuotes();
  });
});
