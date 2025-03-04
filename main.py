from mailersend import emails

mailer = emails.NewEmail("mlsn.eb2e198c221c2201dc48674958254f53a99f7baeb0023958fc8ccfbfcb7fd89a")

# define an empty dict to populate with mail values
mail_body = {}

mail_from = {
    "name": "Your Name",
    "email": "c.wink27@ncf.com",
}

recipients = [
    {
        "name": "Your Client",
        "email": "smasher0505@gmail.com",
    }
]

reply_to = {
    "name": "Name",
    "email": "reply@domain.com",
}

mailer.set_mail_from(mail_from, mail_body)
mailer.set_mail_to(recipients, mail_body)
mailer.set_subject("Hello!", mail_body)
mailer.set_html_content("This is the HTML content", mail_body)
mailer.set_plaintext_content("This is the text content", mail_body)
mailer.set_reply_to(reply_to, mail_body)

# using print() will also return status code and data
response = mailer.send(mail_body)
print(response)