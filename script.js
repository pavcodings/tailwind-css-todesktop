function showMenu()
{
    console.log("clicked")
    // document.getElementById("hamb").classList.toggle("")
}

function clickHandle()
{
const nav_dialog=document.getElementById("nav-dialog")
nav_dialog.classList.toggle('hidden')
    console.log("clicked todesktop menu")
}



const initialTranslateLTR=48*4
const initialTranslateRTL=-36*4
function setupInterSectionObserver(element,isLTR, speed)
{

   
    const callback=(entries)=>{
isIntersecting=entries[0].isIntersecting
if(isIntersecting)
{
addEventListener('scroll',scrollHandler)

}
else
{
removeEventListener('scroll',scrollHandler)
}

    }

const interSectionObserver= new IntersectionObserver(callback)
interSectionObserver.observe(element)



function scrollHandler()
{
    const translatex = (window.innerHeight-element.getBoundingClientRect().top) * speed
    let totaltranslate=0

    if(isLTR)
    {
        totaltranslate=initialTranslateLTR+translatex

    }
    else
    {
        totaltranslate=-(initialTranslateRTL+translatex)
    }
    element.style.transform = 'translateX('+totaltranslate+'px)'
    

}


}

const line1=document.getElementById('line1')
const line2=document.getElementById('line2')
const line3=document.getElementById('line3')
const line4=document.getElementById('line4')

setupInterSectionObserver(line1,true, 0.15)
setupInterSectionObserver(line2,false, 0.15)
setupInterSectionObserver(line3,true,0.15)
setupInterSectionObserver(line4,false,0.50)







// faq controllers


function faqHandle(ielement, ddelement)
{

    ielement.classList.toggle('rotate-180')
    ddelement.classList.toggle('hidden')
 


}

const dtElement = document.querySelectorAll('dt')
// console.log(dtElement)

dtElement.forEach((element)=>{
   // console.log(element)

   const ddelement=element.parentElement.querySelector('dd')
const ielement=element.querySelector('i')

element.addEventListener('click',(event)=>{

faqHandle(ielement, ddelement)

})

})


