# run at src directory
from sdk_python import SdkPython

deliveree_sdk = SdkPython()


print(deliveree_sdk.get_quote(
            api_key = "EpFmx1Hx6VNZ1dvNsYxR",
            time_type = "schedule",
            pickup_time = "2021-06-08T11:54:10.662Z",
            vehicle_type_id = 107,
            packs = [{"dimensions":["120","100","80"],"weight":"15","quantity":1}],
            locations = [{"address": "Jakarta, Indonesia", "latitude": -6.2087634, "longitude": 106.845599},
                         {"address": "Bandung Trade Mall, Jalan Kiara Condong, Babakan Surabaya, Bandung City, Tây Java, Indonesia",
                          "latitude": -6.911497199999999, "longitude": 107.6443171}]
            )) # ok

print(deliveree_sdk.create_dlvr(
            api_key = "EpFmx1Hx6VNZ1dvNsYxR",
            vehicle_type_id = 1,
            note = "Fragile item that needs good care.",
            time_type = "schedule",
            pickup_time = "2016-05-13T09:51:16+07:00",
            job_order_number = "66666",
            locations = [
                {
                  "address": "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama",
                  "latitude": -6.2608232,
                  "longitude": 106.7884168,
                  "recipient_name": "Duke",
                  "recipient_phone": "+84903398399",
                  "note": "Second floor, room 609"
                },
                {
                  "address": "Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan",
                  "latitude": -6.2608232,
                  "longitude": 106.7884168,
                  "recipient_name": "Nam",
                  "recipient_phone": "+84903856534",
                  "note": "First floor, right room.",
                  "need_cod": True,
                  "cod_note": "You need to get money from Nam",
                  "cod_invoice_fees": 5000,
                  "need_pod": True,
                  "pod_note": "You need to ..."
                }
              ],
            require_signatures = True
       )) # ok

print("get_vehicle_types: ", deliveree_sdk.get_vehicle_types("EpFmx1Hx6VNZ1dvNsYxR")) # ok
print("get_list_dlvr: ", deliveree_sdk.get_list_dlvr("EpFmx1Hx6VNZ1dvNsYxR")) # ok
print("get_dlvr: ", deliveree_sdk.get_dlvr(api_key = "EpFmx1Hx6VNZ1dvNsYxR", id = '35549')) # ok
print("cancel_dlvr: ", deliveree_sdk.cancel_dlvr(api_key = "EpFmx1Hx6VNZ1dvNsYxR", id = '35586')) # <Response [405]> I see code is ok.