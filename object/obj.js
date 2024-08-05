const categories = [
    {
     id: "C1",
     categoryName: "Platters",
     superCategory: {
     superCategoryName: "South Indian",
     id: "SC1"
    }
    }, 
    {
     id: "C2",
     categoryName: "Tandoor",
     superCategory: {
    superCategoryName: "North Indian",
     id: "SC2"
     }
    }, 
    {
     id: "C3",
     categoryName: "Dosai",
     superCategory: {
    superCategoryName: "South Indian",
     id: "SC3"
     }
    }, 
    {
     id: "C4",
     categoryName: "Vegetables",
     superCategory: {
     superCategoryName: "North Indian",
     id: "SC4"
     }
    }];
    const menu2 = [
    {
     id: "item1",
     itemName: "Butter Roti",
     rate: 20,
     taxes: [
    {
     name: "Service Charge",
     rate: 10,
     isInPercent: true,
     }, 
    {
     name: "GST",
     rate: 18,
     isInPercent: true,
     }],
     category: {
     categoryId: "C2"
     }
    }, 
    {
     id: "item2",
    itemName: "Paneer Butter Masala",
     rate: 120,
     taxes: [
    {
     name: "Service Charge",
     rate: 10,
     isInPercent: true,
     }, 
    {
     name: "GST",
     rate: 18,
     isInPercent: true,
     }, 
    {
     name: "Service Tax",
     rate: 10,
     isInPercent: true,
     }],
     category: {
     categoryId: "C4"
    }
    }, 
    {
     id: "item3",
     itemName: "Masala Dosai",
     rate: 50,
     taxes: [{
     name: "GST",
     rate: 18,
     isInPercent: true,
     }, 
    {
     name: "Service Tax",
     rate: 10,
     isInPercent: true,
     }],
     category: {
     categoryId: "C3"
     }
    }, 
    {
     id: "item4",
     itemName: "Dosai Platter",
     rate: 150,
     taxes: [{
     name: "Service Tax",
     rate: 10,
     isInPercent: true,
     }],
     category: {
     categoryId: "C1"
     }
    }];

    const bill2 = {
     id: "B1",
     billNumber: 1,
     openTime: "06 Nov 2020 14:19",
     customerName: "CodeQuotient",
     billItems: [{
     id: "item2",
     quantity: 3,
     discount: {
     rate: 10,
     isInPercent: false,
     }
     }, 
     {
     id: "item1",
     quantity: 9,
     discount: {
     rate: 10,
     isInPercent: true,
     }
     }, 
     {
     id: "item4",
     quantity: 2,
     discount: {
     rate: 15,
     isInPercent: true,
     }
     }]
     }
   const menu = [{ id : "item1",
    itemName : "Butter Roti",
    rate : 20,
    taxes : [
    {
    name : "Service Charge",
    rate : 10,
    isInPercent : false
    }, {
    name : "GST",
    rate : 5,
    isInPercent : true
    }
    ],
    category : {
    categoryId : "C2"
    }
    }, {
    id : "item2",
    itemName : "Paneer Butter Masala",
    rate : 120,
    taxes : [
    {
    name : "Service Charge",
    rate : 10,
    isInPercent : true
    }, {
    name : "GST",
    rate : 18,
    isInPercent : true
    }, {
    name : "Service Tax",
    rate : 10,
    isInPercent : true
    }
    ],
    category : {
    categoryId : "C4"
    }
    }, {
    id : "item3",
    itemName : "Masala Dosai",
    rate : 50,
    taxes : [{
    name : "GST",
    rate : 18,
    isInPercent : true
    }, {
    name : "Service Tax",
    rate : 10,
    isInPercent : true
    }],
    category : {
    categoryId : "C3"
    }
    }, {
    id : "item4",
    itemName : "Dosai Platter",
    rate : 150,
    taxes : [{
    name : "Service Tax",
    rate : 10,
    isInPercent : true
    }],
    category : {
    categoryId : "C1"
    }
    }];

    function calculateBill(bill) {
        let totalBillAmount = 0;
        let billItems = [];

        for (let i = 0; i < bill.billItems.length; i++) {
            let item = bill.billItems[i];
            let menuItem = menu.find(menuItem => menuItem.id === item.id);
            if (!menuItem) {
                console.log(`Menu item with id ${item.id} not found`);
                continue;
            }
            let discountAmount = 0;
            if (item.discount) {
                if (item.discount.isInPercent) {
                    discountAmount = (menuItem.rate * item.discount.rate) / 100;
                } else {
                    discountAmount = item.discount.rate;
                }
            }
            let discountedPrice = menuItem.rate - discountAmount;
            let taxAmount = 0;
            for (let j = 0; j < menuItem.taxes.length; j++) {
                let tax = menuItem.taxes[j];
                if (tax.isInPercent) {
                    taxAmount += (discountedPrice * tax.rate) / 100;
                } else {
                    taxAmount += tax.rate;
                }
            }
            let itemTotalPrice = (discountedPrice + taxAmount) * item.quantity;
            totalBillAmount += itemTotalPrice;
            billItems.push(`${menuItem.itemName}@${menuItem.rate} x ${item.quantity} = ${itemTotalPrice.toFixed(2)}`);
        }

        return [totalBillAmount.toFixed(2), billItems];
    }

    // Input
    const bill = {
        id: "B1",
        billNumber: 1,
        openTime: "06 Nov 2020 14:19",
        customerName: "CodeQuotient",
        billItems: [
            {
                id: "item2",
                quantity: 3,
                discount: {
                    rate: 10,
                    isInPercent: false
                }
            },
            {
                id: "item1",
                quantity: 15,
                discount: {
                    rate: 10,
                    isInPercent: true
                }
            },
            {
                id: "item4",
                quantity: 2,
                discount: {
                    rate: 20,
                    isInPercent: false
                }
            },
            {
                id: "item3",
                quantity: 5,
                discount: {
                    rate: 5,
                    isInPercent: true
                }
            }
        ]
    };

    console.log(calculateBill(bill));