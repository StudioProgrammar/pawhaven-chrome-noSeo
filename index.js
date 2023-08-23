
var box = document.getElementById('check')
let checker = false;

let mything = document.getElementById('html-tag')


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position
//also this doesn't send the user back to the top --- works fine!!

box.addEventListener('click' , () => {

  console.log(mything, 'is here')

    if(checker == false) {
      //sets body to height of content seen and hides the rest
          document.body.style.height = '100%'          
          document.body.style.overflowY = 'hidden'
          
          //somehow don't use this
        //  mything.style.height = '100%'    
        
        //uh html does the same?
          mything.style.overflowY = 'hidden'

          console.log('overflow y is hidden')

          checker = true; 
    } else if (checker == true) {
      document.body.style.height = 'unset'
      document.body.style.overflowY = 'visible'
      mything.style.height = 'unset'
      mything.style.overflowY = 'visible'
      console.log('overflow y is visible')
        checker = false;
    }
})






/*var box = document.getElementById('check')
let checker = false;


//works to prevent any background scrolling for mobile
//even works when the menu isn't in a fixed position

box.addEventListener('click' , () => {

    if(checker == false) {
          document.body.style.position = 'fixed'
            document.body.style.left = '0'
            document.body.style.right = '0'
          console.log('fiexed') 
          checker = true; 
    } else if (checker == true) {
        document.body.style.position = 'relative'
        checker = false;
        console.log('unset')
    }
})

*/