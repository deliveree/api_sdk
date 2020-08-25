<<<<<<< HEAD
"""
Deliveree SDK
With Deliveree SDK, developers can integrate our on-demand local delivery
platform into their applications. The SDK is designed for developers to
create bookings.

Contact: duke@deliveree.com
"""

=======
>>>>>>> 852bf343d80c5dafa613398f3df5ed693b6d25fb
import requests
import json
from utils import load_conf


class SdkCreateDlvr():
    def __init__(self):
        self.conf = load_conf()

    def sdk_create_dlvr_conn(
        self,
        api_key,
        vehicle_type_id,
        note,
        time_type,
        pickup_time,
        job_order_number,
        locations
    ):

        conf = self.conf["sdk-create-dlvr"]
        data = conf["payload"]
        data["time_type"] = self._time_type(time_type)
        data["vehicle_type_id"] = self._vehicle_type_id(vehicle_type_id)
        data["note"] = self._note(note)
        data["locations"] = self._locations(locations)
        data["job_order_number"] = self._job_order_number(job_order_number)
        data["pickup_time"] = self._pickup_time(pickup_time)
        payload = json.dumps(data)
        headers = conf["headers"]
        headers["Authorization"] = api_key

        conn = requests.post(
            conf["url"],
            headers=headers,
            data=payload,
            timeout=3)
        print(conn, conn.text)

        return conn.text

    def _time_type(self, value):
        if type(value) != str:
            raise Exception("time_type expect a string")

        return value

    def _vehicle_type_id(self, value):
        if type(value) != int:
            raise Exception("vehicle_type_id expect a int")

        return value

    def _note(self, value):
        if type(value) != str:
            raise Exception("note expect a str")

        return value

    def _job_order_number(self, value):
        if type(value) != str:
            raise Exception("note expect a str")

        return value

    def _locations(self, value):
        if type(value) != list:
            raise Exception("locations expect a list")
        elif value:
            for i in value:
                if type(i) != dict:
                    raise Exception("locations value expect a dict")

        return value

    def _pickup_time(self, value):
        if type(value) != str:
            raise Exception("note expect a str")

        return value
