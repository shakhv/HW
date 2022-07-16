
function reducer(state, {type, ШО, СКОКА }){ 
    if (!state){ 
        return {
            пиво: {storage : 100 , price: 65},
            чипсы: {storage: 145 , price: 120},
            сиги: {storage : 220 , price: 75.50},
            горілка: {storage : 140 , price: 200.50},
            корсары: {storage : 330 , price: 15.50},
            чупа_чупс: {storage : 220 , price: 14.50},
            вино_777: {storage : 220 , price: 14.50},
            касса: 0
        }
        
    }
     
    if(type === 'ВЫБОР'){
        if(СКОКА <= 0 || СКОКА > state[ШО].storage){
            return state;
        }return{
            ...state, 
            касса: +state.касса + (СКОКА * state[ШО].price),
        }
    }
    if (type === 'КУПИТЬ'){
            if(state[ШО].storage >= СКОКА){
                state[ШО].storage = state[ШО].storage - СКОКА
            }return {
                ...state 	 
            }
    } 
    if(type === 'ТРАНЗАКЦИЯ'){
        if(state.касса >= 0){
            return{
                ...state,
                касса : state.касса * 0,
            }
        }
    }
   
    return state 
}

const store = createStore(reducer)
console.log(store.getState())

function createStore(reducer){
    let state       = reducer(undefined, {}) //стартовая инициализация состояния, запуск редьюсера со state === undefined
    let cbs         = []                     //массив подписчиков
    
    const getState  = () => state            //функция, возвращающая переменную из замыкания
    const subscribe = cb => (cbs.push(cb), () => cbs = cbs.filter(c => c !== cb)) //возвращаем функцию unsubscribe, которая удаляет подписчика из списка
                             
    const dispatch  = action => { 
        const newState = reducer(state, action) //пробуем запустить редьюсер
        if (newState !== state){ //проверяем, смог ли редьюсер обработать action
            state = newState //если смог, то обновляем state 
            for (let cb of cbs)  cb() //и запускаем подписчиков
        }
    }
    return {
        getState, //добавление функции getState в результирующий объект
        dispatch,
        subscribe //добавление subscribe в объект
    }
}
   
for(let [key, value] of Object.entries(store.getState())){
        let div = document.getElementById('content')
        let btn = document.createElement('button')
        var text = document.getElementById('text')
        let stock = document.getElementById('stock')
        let sklad = document.createElement('div')
            sklad.style.backgroundColor = 'silver'
            sklad.style.display = 'flex'
        let btn1 = document.createElement('div')
        let buy = document.getElementById('buy')
        stock.append(sklad)
        text.append(btn1)
        div.append(btn)
    btn.id = 'product'
    btn.innerHTML = `${key} (${value.price + "грн"})`


    btn.onclick = () => {
        store.dispatch({type: 'КУПИТЬ', ШО: key, СКОКА: 1})
        store.dispatch({type: 'ВЫБОР' , ШО : key , СКОКА: 1})
        console.log(store.getState())
    }
     

    buy.onclick = () => {
    let div = document.createElement('div')
    let content = document.getElementById('buy_content')
    var allMoney = `${store.getState().касса}`
    var result = Number(allMoney) 
    moneyStorage.push(result)
    arraySum(moneyStorage)
    console.log(moneyStorage)

    content.append(div)
       div.innerHTML = `Транзакция ${Date()}: ${store.getState().касса} грн`
       store.dispatch({type: 'ТРАНЗАКЦИЯ', ШО: 'касса', СКОКА: 0})
       store.dispatch({type: 'КАССА', ШО: 'касса', СКОКА: 0})
        console.log(store.getState())
    }
   store.subscribe(()=> sklad.innerHTML = '/' + ` ${key} ${value.storage} шт.` + ' ' );
    let moneyStorage = []
    function arraySum(array){
        var money = document.getElementById('total')

        var sum = 0;
        for(var i = 0; i < array.length; i++){
            sum += array[i];
            }
            money.innerText = sum + " грн";
        }
}

function casa(){
    const h1 = document.createElement('h1');
    h1.id = 'change'
    h1.style.color = 'red'
    text.append(h1);
    store.subscribe(() => h1.innerText = `До сплати: ${store.getState().касса} грн`);
    h1.innerText = `До сплати:${store.getState().касса}`;
}
casa();


