# run at src directory
from sdk_python import SdkPython

deliveree_sdk = SdkPython()


print(deliveree_sdk.get_quote(
            api_key = "",
            time_type = "schedule",
            pickup_time = "2021-06-08T11:54:10.662Z",
            vehicle_type_id = 107,
            packs = [{"dimensions":["120","100","80"],"weight":"15","quantity":1}],
            locations = [{"address": "Jakarta, Indonesia", "latitude": -6.2087634, "longitude": 106.845599},
                         {"address": "Bandung Trade Mall, Jalan Kiara Condong, Babakan Surabaya, Bandung City, Tây Java, Indonesia",
                          "latitude": -6.911497199999999, "longitude": 107.6443171}]
            )) # ok

print(deliveree_sdk.create_dlvr(
            api_key = "",
            vehicle_type_id = 107,
            note = "Fragile item that needs good care.",
            time_type = "now",
            pickup_time = "2016-05-13T09:51:16+07:00",
            job_order_number = "66666",
            locations = [
                            {
                                "address": "Wisma Anugraha, Jl. Taman Kemang No.32B, RT.14/RW.1, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730, Indonesia",
                                "latitude": -6.257851,
                                "longitude": 106.8098256,
                                "recipient_name": "name",
                                "recipient_phone": "1232132"
                            },
                            {
                                "address": "Deliveree Indonesia",
                                "latitude": -6.2578501,
                                "longitude": 106.8097371,
                                "need_cod": True,
                                "cod_invoice_fees": 5000,
                                "need_pod": True,
                                "recipient_name": "name",
                                "recipient_phone": "1232132"
                            }
                        ]
            )) # ok

print("get_vehicle_types: ", deliveree_sdk.get_vehicle_types("")) # ok
print("get_list_dlvr: ", deliveree_sdk.get_list_dlvr("")) # ok
print("get_dlvr: ", deliveree_sdk.get_dlvr(api_key = "", id = '35549')) # ok
print("cancel_dlvr: ", deliveree_sdk.cancel_dlvr(api_key = "", id = '35586')) # <Response [405]> I see code is ok.