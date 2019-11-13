window.pages = {
    "/": ["/"],
    "app": ["/shop/#/","/shop/#/#/"]
};
window.routes = {
    "main": {
        "/": { 
            "/": {
                "unprotected": { "template": "/cdn/html/template-index.html", "document": "/cdn/html/unprotected-index.html" }
            }
        }
    },
    "popup": {
        "settings": {
            "/builder/": {
                "pages": "builder",
                "isprotected": { "template": "/cdn/html/template-builder.html", "document": "/cdn/html/isprotected-builder.html" },
                "unprotected": { "template": "/cdn/html/template-builder.html", "document": "/cdn/html/unprotected-builder.html" }
            }
        }
    }
};