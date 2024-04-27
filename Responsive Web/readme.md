size factor :
------------
    px : 
        it is fixed in size once we assign value of text or box in px then it not change even page size decrese
    % :
        % is used when we want to controll height and width with respect to parent . means if height of  parent is increase then respective height of children increase in %
        if height of parent is 30px and we assign children height 50% then children got 15px which is 50% of parent
    vw , vh :
        vh and vw is work with respect to viewport height and viewport width respectively . 
        for example 50vh it take 50% of full screen
    vmin :
        height or width change thay upto vmin after vmin height and width will not change 
    vmax :
        height or width change thay vmax pa6i vmax pela height and width constant re
    em : 
        mainly use in text | it increse and decrese size according to its parant means 1em in represent size same as parent , 2em represent size 2X of parent like vise
    rem :
        it increse and decrese size according to screan , 1rem = 16px | 2rem represent 32px 






Node :
----
    -> position absolute ka use kam se kam karo kyoki vo responsiveness me issue karega
    -> in beggining of project hammesa parent box ne position relative aapvani practice rakhvi jethi all children out of parant box naa jaay

media quary :
-----------

Example of media quary
@media (max-width: 600px) {
    .box{
        background-color: #000;
    }
    .another{
        background-color: #fff;
        border-radius: 50%;
    }
}


calc(two difference factor)
Ex height : calc(100% - 100px)  <---here space between both side of - is mendatoy
                    
