window.onload = () =>{

    let boostAddClick1 = {
        value: 1,
        price: 15
    }

    let boostAddClick2 = {
        value: 10,
        price: 100
    }

    let count = 0;
    let appendCount = 1

    let cornImg = document.querySelector("#corn-img")
    let textCount = document.querySelector("#count")
    let textLvl = document.querySelector("#current-lvl")
    let textDamage = document.querySelector("#damage")

    let btnAppendClick1 = document.querySelector('.boost-addclick:nth-child(1)')
    let btnAppendClick2 = document.querySelector('.boost-addclick:nth-child(2)')
    let btnNewGame = document.querySelector('.boost-addNew-game')

    const UpdateUI = (element, text) =>{
      element.innerText = text
    }

    const UpdateLVL= (_count) =>{
        let _textLvl = null
        if(_count > 1 && _count <= 999)
        {
            _textLvl = "Уровень: Начальный"
        }
        else if(_count > 1000 && _count <= 4999){
            _textLvl = "Уровень: Любитель"
        }
        else if(_count >5000){
            _textLvl = "Уровень: Продвинутый"
        }
        UpdateUI(textLvl, _textLvl)
    }

    const AddBoost = ( boost ) =>{
        if(boost.btnBoost.price <= count)
        {
            appendCount = appendCount + boost.btnBoost.value
            count -= boost.btnBoost.price 
            boost.btnBoost.price *=2
            UpdateUI(textCount, `зᴀᴩᴀбоᴛᴀно: ${count}$`)
            UpdateUI(boost.element, `${boost.text} | ${boost.btnBoost.price}$`)
            UpdateUI(textDamage, `Текущий урон: ${appendCount}`)
        }
        else
        {
            console.log("Не хватает денег")
        }
        UpdateLVL(count)
    }

    cornImg.addEventListener('click', ()=>{
        console.log(1)
    })

    cornImg.addEventListener('click', ()=>{
        
        count += appendCount
        UpdateUI(textCount,`Заработано: ${count}$`)
        UpdateLVL(count)
    })

    btnAppendClick1.addEventListener('click', ()=>{
      let boostClick = {
        btnBoost: boostAddClick1,
        element: btnAppendClick1,
        text: `+1 доп. клик`
      }
      AddBoost(boostClick)
    })

    btnAppendClick2.addEventListener('click', ()=>{
        let boostClick = {
            btnBoost: boostAddClick2,
            element: btnAppendClick2,
            text: `+10 доп. клик`
          }
          AddBoost(boostClick)
    })

    btnNewGame.addEventListener('click', ()=>{
      if(count >= 5000)
      {
        boostAddClick1 = {
            value: 1,
            price: 15
        }

        boostAddClick2 = {
            value: 10,
            price: 100
        }

        count = 0
        appendCount = 1;
        UpdateUI(textCount, `Заработано: 0$`)
        UpdateUI(textDamage, `Текущий урон: 0`)
        UpdateUI(textLevel, `Уровень: Начальный`)
        UpdateUI(textAppendClick1, `+1 доп. клик | 15$`)
        UpdateUI(textAppendClick2, `+10 доп. клик | 100$`)
      }
    })
}