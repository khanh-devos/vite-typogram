# typograms

Typograms (short for typographic diagrams) is a lightweight image format
 (`text/typogram`) useful for defining simple diagrams in technical 
documentation, originally developed [here](https://code.sgo.to/2022/06/20/typographic-diagrams.html).

See it in action here:

https://google.github.io/typograms/

Like markdown, typograms is heavily inspired by pre-existing conventions 
found in ASCII diagrams. A small set of primitives and rules to connect
them is defined, which you can use to build larger diagrams.

Typograms optimizes for editability and portability (e.g. plain text is
easy to maintain, change, store and transmit), at the cost of expressivity
(e.g. SVG is more expressive) and ergonomics (e.g. higher level tools
produce diagrams faster).

You can embed typograms into pages using the JS rendering library: 

```html
<body>
  <script src="https://google.github.io/typograms/typograms.js"></script>
  <script type="text/typogram">
    @(animate:{time:1000, repeat:true, width:2000, height:100})          
    (
      +---+
     / (1) \--> My first diagram!
    +-------+
    )@{class123}
      
    (
      +---+
     / (2) \--> My first diagram!
    +-------+
    )@{class123}

    (
      +---+
     / (3) \--> My first diagram!
    +-------+
    )@{class123}

    </script>

    <script type="text/typogram">
      (__)
      /  \
      \__/
    </script>
</body>
```

A comparison with related work is available [here](https://google.github.io/typograms/#related).
The original owner of this algorithm is a Google developer [Samuelgoto](https://github.com/samuelgoto/typograms). I added animation features.


