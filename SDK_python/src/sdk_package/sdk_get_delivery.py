"""
Deliveree SDK
With Deliveree SDK, developers can integrate our on-demand local delivery
platform into their applications. The SDK is designed for developers to
get bookings.

Contact: duke@deliveree.com
"""

import requests
from utils import load_conf


class SdkGetDelivery():
    def __init__(self):
        self.conf = load_conf()

    def get_delivery_detail(self, api_key, id):
        conf = self.conf["sdk-get-dlvr"]
        url = conf["url"].format(self._id(id))
        headers = conf["headers"]
        headers["Authorization"] = api_key

        response = requests.request(
            "GET",
            url,
            headers=headers,
            timeout=3)

        return response.text

    def _id(self, value):
        if type(value) != str:
            raise Exception("id expect a string")

        return value
