$ ->
  # Initialize full-page slider
  $("#slides").superslides({ hashchange: true })

  # Initialize modals
  $(".modal-link").leanModal()

  # Pagination extras
  $(".nav-link").click((e) ->
    target = $(e.target)

    switch (target.closest(".page").attr("id"))
      when "main" then $("#slides").superslides("animate", (if target.attr("data-target") == "candidates" then "prev" else "next"))
      when "candidates" then $("#slides").superslides("animate", "next")
      when "issues" then $("#slides").superslides("animate", "prev")
  )

  # Filtering functionality
  issues = []
  candidates = []

  renderQuotes = () ->
    $("#quotes").hide()

    # O(n^2) ... take that, Mitzenmacher
    if not issues.length and not candidates.length
      for q in $("#quotes").children()
        $(q).show()
    else
      for q in $("#quotes").children()
        $(q).show()

        issue = $(q).attr("data-issue")
        candidate = $(q).attr("data-candidate")

        if not (issue in issues) and issues.length
          $(q).hide()

        if not (candidate in candidates) and candidates.length
          $(q).hide()

    $("#quotes").fadeIn()

  $(".issue").click((e) ->
    target = $(e.target)

    id = target.attr("name")
    target.toggleClass("selected")

    if target.hasClass("selected")
      issues.push id
    else
      issues = issues.filter (x) -> x isnt id

    renderQuotes()
  )

  $(".candidate").click((e) ->
    target = $(e.target)

    id = target.attr("name")
    target.toggleClass("selected")

    if target.hasClass("selected")
      candidates.push id
    else
      candidates = candidates.filter (x) -> x isnt id

    renderQuotes()
  )

  $(".clear-issues").click(->
    issues = []
    $(".issue").removeClass("selected")
    renderQuotes()
  )

  $(".clear-candidates").click(->
    candidates = []
    $(".candidate").removeClass("selected")
    renderQuotes()
  )

# WHO ARE YOU AND WHY ARE YOU READING MY CODE
# HASHTAG ASHAMED