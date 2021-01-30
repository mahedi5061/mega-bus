 
//This function is used to count the ticket.

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
//This function is used to calculate the total amount.

function totalCalculate(){
   
    const firstClassTotalAmount=getTicketInput('firstClass');
    const economyTotalAmount=getTicketInput('economy');
    const totalCalculateAmount=firstClassTotalAmount*150 + economyTotalAmount*100;
    document.getElementById('total-count').innerText='$' +totalCalculateAmount;
    
    const tax=Math.round(totalCalculateAmount*0.1);
    document.getElementById('tax-amount').innerText='$'+tax;

    const grandTotal=totalCalculateAmount+tax;
    document.getElementById('grand-total').innerText='$'+grandTotal;


    document.getElementById('totalPay').innerText='$'+grandTotal; //This line indicate inside book now total amount.
    
     
}

function getTicketInput(ticket){
    const ticketTotalAmount=document.getElementById(ticket+'-count');
    const ticketTotalAmountNumber=parseInt(ticketTotalAmount.value);
    return ticketTotalAmountNumber;
}

// Ticket Booking part

const bookedArea = document.getElementById('bookedTicked').addEventListener('click',function(){
     const bookedAreaHide=document.getElementById('areaHide');
     bookedAreaHide.style.display="none";

     const paymentArea=document.getElementById('areaShow');
     paymentArea.style.display="block";

     const payCount=document.getElementById('totalPay').innerText;
     const payCountNumber=parseInt(payCount);
     totalCalculate();

})