document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#productArea").addEventListener("click", (e) => {
      e.preventDefault() //預防a轉址
      const icon = e.target;
      const data = icon.dataset;
      const id = data.productId;
      const area = document.querySelector('.list');

      addToCart(id, area);
      clearAll()
    })
  })

  const addToCart = (id,area)=>{  
    const li = document.createElement('li');
    const span = document.createElement('span');
    const btn = document.createElement('button');

    span.textContent = id;
    btn.textContent = 'delete';
    btn.className ='closeBtn';
    
    if(id){
      area.appendChild(li)
      li.appendChild(span)
      li.appendChild(btn)
      // btn.addEventListener('click',(e)=>{
      //     e.target.parentNode.remove();
      // })
      console.log('can add shop list')
      updateState();
    }
    else {
        console.log('cant add')
    }

    area.addEventListener('click', (e)=>{
          
      if(e.target.className == 'closeBtn'){
          e.target.parentNode.remove();
          updateState();
      }
  });
  }

  const updateState = ()=>{
      let state = document.querySelector('#state');
      let length = itemLength();
      if(length > 0){
          state.textContent = `商品${length}`;
      } else {
          state.textContent = "目前沒有商品";
      }
  }

  const clearAll = ()=>{
      const clearBtn = document.querySelector('#clear'); 
      clearBtn.addEventListener('click',()=>{
          const allitem = itemCount();
          console.log(allitem);

          allitem.forEach((item)=>{
            item.remove();
        })
        updateState();

      })
  }

