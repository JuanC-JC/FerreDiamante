const dataYears = document.getElementById('dataYears')
const dataWorks = document.getElementById('dataWorks')
const dataShippings = document.getElementById('dataShippings')
const dataWorkers = document.getElementById('dataWorkers')

let firstTimeData = false

function countDown (data,value, plusIcon=false, time=2000) {

  let counter = 0 

  const fps = time / value > 10 ? time / value : 20

  let incrementValue = (fps * value) / time

  const timer = setInterval(()=>{

    counter += incrementValue

    data.textContent = plusIcon ? `+${counter}` : counter
  
    if(counter == value){
      clearInterval(timer)
    }
  
  },fps)

}

const observerData = new IntersectionObserver((entries, observer)=>{

  if(entries[0].isIntersecting){
      countDown(dataYears,20)
      countDown(dataWorks,400,true)
      countDown(dataShippings,5000,true)
      countDown(dataWorkers,1)
      observer.unobserve(entries[0].target)
    }
  },{ threshold: [0] })

observerData.observe(dataYears)




const appearOptions = {
  threshold: [0.5],
  rootMargin:'0px 0px 0px 0px'

};

const appearOnScroll = new IntersectionObserver((entries,appearOnScroll)=>{

  // console.log(entries[0])

  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target)
    }
  })
  }
,appearOptions)


document.querySelectorAll('.fade-in').forEach(fader=>{
  appearOnScroll.observe(fader)
})
