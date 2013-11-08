freeDOM
=======

###Goals:
- *freeDOM* is a project to transparently and portably decide whether to evaluate templated HTML content on the server or the client interchangably to construct a page which is both SEO compliant yet reloadable on the client from the same codebase.
- It is powered by node and cheerio, an server environment that can evaluate JQuery server-side, used to host one of several javascript templating systems that will have common means of accessing a model also available on client and server.

###It should provide for:

- Creating HTML on the server that is delievered to the browser so as to be searchable by Google, et. al.
- Creating HTML from the same source as the server that can be rendered and/or reloaded on the client via ajax
- Making both of these options available during each request, to meet the requirements of SEO, mulitple platforms, and RAD development are met simultaneously.
  
###Technologies at present:
- Node.js *(javascript server env)*
- Cheerio *(jquery in node)*
- JQuery Templates *(expression of HTML content)*
    
###Future support:
- Rhino *(javascript via java)*
- solr *(javascript adapters for search results)*
    

    
    
  
  
