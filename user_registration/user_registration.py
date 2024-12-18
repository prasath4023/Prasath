import mysql.connector
from tkinter import *
from tkinter import messagebox

def save_to_database():
    name = name_var.get()
    age = age_var.get()
    email = email_var.get()
    mobile = mobile_var.get()
    country = country_var.get()

    if not name or not age or not email or not mobile or not country:
        messagebox.showwarning("Input Error", "All fields are required!")
        return
    
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",  
            password="prasath@12345", 
            database="kinter_database"
        )
        cursor = conn.cursor()

        insert_query = "INSERT INTO user_details (name, age, email, mobile, country) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(insert_query, (name, age, email, mobile, country))
        conn.commit()

        messagebox.showinfo("Success", "Data saved successfully!")
        name_var.set("")
        age_var.set("")
        email_var.set("")
        mobile_var.set("")
        country_var.set("")
    except mysql.connector.Error as err:
        messagebox.showerror("Database Error", f"Error: {err}")
    finally:
        if conn.is_connected():
            cursor.close()
            conn.close()

root = Tk()
root.title("User Registration Form")
root.geometry("400x400")


name_var = StringVar()
age_var = StringVar()
email_var = StringVar()
mobile_var = StringVar()
country_var = StringVar()


Label(root, text="Name:", font=("Arial", 12)).grid(row=0, column=0, padx=10, pady=10, sticky=W)
Entry(root, textvariable=name_var, font=("Arial", 12)).grid(row=0, column=1, padx=10, pady=10)

Label(root, text="Age:", font=("Arial", 12)).grid(row=1, column=0, padx=10, pady=10, sticky=W)
Entry(root, textvariable=age_var, font=("Arial", 12)).grid(row=1, column=1, padx=10, pady=10)

Label(root, text="Email:", font=("Arial", 12)).grid(row=2, column=0, padx=10, pady=10, sticky=W)
Entry(root, textvariable=email_var, font=("Arial", 12)).grid(row=2, column=1, padx=10, pady=10)

Label(root, text="Mobile:", font=("Arial", 12)).grid(row=3, column=0, padx=10, pady=10, sticky=W)
Entry(root, textvariable=mobile_var, font=("Arial", 12)).grid(row=3, column=1, padx=10, pady=10)

Label(root, text="Country:", font=("Arial", 12)).grid(row=4, column=0, padx=10, pady=10, sticky=W)
Entry(root, textvariable=country_var, font=("Arial", 12)).grid(row=4, column=1, padx=10, pady=10)

Button(root, text="Submit", command=save_to_database, font=("Arial", 12), bg="green", fg="white").grid(row=5, columnspan=2, pady=20)

root.mainloop()
