const counters = document.querySelectorAll('.counter');


counters.forEach((counter) => {
    // console.log(counter);
    counter.innerHTML = 0;

    
    const updatecounter = () => {
      const targetCount = +counter.getAttribute('data-target');
      console.log(targetCount);



      const startingCount = Number( counter.innerHTML);
      const incr = targetCount /100;

      if(startingCount < targetCount){
          counter.innerHTML = `${startingCount + incr}`;
          setTimeout(updatecounter,100)
      }else{
          counter.innerHTML = targetCount;
      }


    }



    updatecounter();

    
});