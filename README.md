!DOCTYPE html
html lang=en
head
    meta charset=UTF-8
    title Web form title
head

body
    h2 Personal Information Form h2

    form
        label for=name
            Name
        label
        input type=text id=name required placeholder=name

    br
    br

    label
        input type=radio name=format required 
        Male
    label
    label
        input type=radio name=format required 
        Female
    label    

    br
    br        
    
    label for=age Age label
    select id=age required
        option 10-20 option
        option 20-30 option
        option 30-40 option
        option 40-50 option
        option 50-60 option
    select

    br
    br 
    label for=phonePhone Numberlabel
    input type=tel id=phone name=phone pattern=[0-9]{3}-[0-9]{3}-[0-9]{4} placeholder=xxx-xxx-xxxx required
    br

    br
    br
    label for=email
        Email
    label
    input type=text id=email required placeholder=name@example.com

    br
    br 

    label for=message   Message label
    textarea rows=4 cols=30 id=message  textarea

    br
    br 

    button type=submit Submit button

    form
body


html
