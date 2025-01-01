const productItems = [{
    title: 'Book1',
    exist: true
},{
    title: 'Book2',
    exist: false
},{
    title: 'Book3',
    exist: true
},{
    title: 'Book4',
    exist: false
}]

const availableProducts = productItems.filter(function(item){
    return item.exist == true
})

const body=document.querySelector('body')

const availableProductsCounts=document.createElement('h2')
availableProductsCounts.textContent =`Available Books: ${availableProducts.length}` 

body.appendChild(availableProductsCounts)



availableProducts.forEach(function(item){
        const newProduct = document.createElement('p')
        newProduct.textContent = item.title

        body.appendChild(newProduct)
    }
)