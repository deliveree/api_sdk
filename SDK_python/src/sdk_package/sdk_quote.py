<<<<<<< HEAD
"""
Deliveree SDK
With Deliveree SDK, developers can integrate our on-demand local delivery
platform into their applications. The SDK is designed for developers to
check prices.

Contact: duke@deliveree.com
"""

=======
>>>>>>> 852bf343d80c5dafa613398f3df5ed693b6d25fb
import requests
import json
from utils import load_conf


class SDKquote():
    def __init__(self):
        self.conf = load_conf()

    def sdk_quote_conn(
        self,
        api_key,
        time_type,
        vehicle_type_id,
        packs,
        locations
    ):

        conf = self.conf["sdk-quote"]
        data = conf["payload"]
        data["time_type"] = time_type
        data["vehicle_type_id"] = vehicle_type_id
        data["packs"] = packs
        data["locations"] = locations
        payload = json.dumps(data)
        headers = conf["headers"]
        headers["Authorization"] = api_key

        conn = requests.post(
            conf["url"],
            headers=headers,
            data=payload,
            timeout=3)

        return conn.text

    def _time_type(self, value):
        if type(value) != str:
            raise Exception("time_type expect a string")

        return value

    def _vehicle_type_id(self, value):
        if type(value) != int:
            raise Exception("vehicle_type_id expect a int")

        return value

    def _packs(self, value):
        if type(value) != list:
            raise Exception("packs expect a list")
        elif value:
            for i in value:
                if type(i) != dict:
                    raise Exception("packs value expect a dict")

        return value

    def _locations(self, value):
        if type(value) != list:
            raise Exception("locations expect a list")
        elif value:
            for i in value:
                if type(i) != dict:
                    raise Exception("locations value expect a dict")

        return value
