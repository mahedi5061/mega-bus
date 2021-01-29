 
//using one function
function changeTicketItem(ticket,ticketNumber){

    const ticketCount=document.getElementById(ticket+'-count');
    const ticketCountNumber=parseInt(ticketCount.value);
     
    let newTicket=ticketCountNumber;
    if(ticketNumber==true){
        newTicket=newTicket+1;
    }
    if(ticketNumber==false && ticketCountNumber>0 ){
        newTicket=newTicket-1;
    }
    ticketCount.value=newTicket;

    totalCalculate();
}

function totalCalculate(){
   
    const firstClassTotalAmount=getTicket('firstClass');
    const economyTotalAmount=getTicket('economy');
    const totalCalculateAmount=firstClassTotalAmount*150 + economyTotalAmount*100;
    document.getElementById('total-count').innerText='$' +totalCalculateAmount;
    
    const tax=Math.round(totalCalculateAmount*0.1);
    document.getElementById('tax-amount').innerText='$'+tax;

    const grandTotal=totalCalculateAmount+tax;
    document.getElementById('grand-total').innerText='$'+grandTotal;
}

function getTicket(ticket){
    const ticketTotalAmount=document.getElementById(ticket+'-count');
    const ticketTotalAmountNumber=parseInt(ticketTotalAmount.value);
    return ticketTotalAmountNumber;
}
