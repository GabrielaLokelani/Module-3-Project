let pp_pattern_sel_name = "diamond";
let pp_pattern_sel_size = "base";
let pp_pattern_sel_cat = "shapes";
// pp_patterns_catalog structure:
// -- category 
//   -- name
//     -- size
//     -- description
//     -- preview image
let pp_patterns_catalog = {
    other: {},
  
    shapes: {
      diamond: [
        {           
         size : "small",
         description : "The shape you will find in a deck of playing cards, a 10x10 pattern." ,
         preview_img : ""
        },
        {
          size : "base",
          description : "The shape you will find in a deck of playing cards, a 20x20 pattern.",
          preview_img : ""
        },
        {
          size : "large",
          description : "The shape you will find in a deck of playing cards, a 30x30 pattern.",
          preview_img : ""
        }
      ],
      hearts: [
      {         
        size : "small",
        description : "The shape you will find in a deck of playing cards, a 10x10 pattern.", 
        preview_img : ""
      },
      {
        size : "base",
        description : "The shape you will find in a deck of playing cards, a 20x20 pattern.",
        preview_img : ""
      },
      {
        size : "large",
        description : "The shape you will find in a deck of playing cards, a 30x30 pattern.",
        preview_img : ""
      }
      ],

      circle : [
        {         
          size : "small",
          description : "The shape you will find in a deck of playing cards, a 10x10 pattern.", 
          preview_img : ""
        },
        {
          size : "base",
          description : "The shape you will find in a deck of playing cards, a 20x20 pattern.",
          preview_img : ""
        },
        {
          size : "large",
          description : "The shape you will find in a deck of playing cards, a 30x30 pattern.",
          preview_img : ""
        }
        ],
      square : [
        {         
          size : "small",
          description : "The shape you will find in a deck of playing cards, a 10x10 pattern.", 
          preview_img : ""
        },
        {
          size : "base",
          description : "The shape you will find in a deck of playing cards, a 20x20 pattern.",
          preview_img : ""
        },
        {
          size : "large",
          description : "The shape you will find in a deck of playing cards, a 30x30 pattern.",
          preview_img : ""
        }
        ]
    }
  
}
  
export {pp_patterns_catalog, pp_pattern_sel_name, pp_pattern_sel_size, pp_pattern_sel_cat};