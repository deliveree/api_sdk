<<<<<<< HEAD
"""
Deliveree SDK
With Deliveree SDK, developers can integrate our on-demand local delivery
platform into their applications. The SDK is designed for developers to
cancel bookings.

Contact: duke@deliveree.com
"""

=======
>>>>>>> 852bf343d80c5dafa613398f3df5ed693b6d25fb
import requests
from utils import load_conf


class SdkCancelDlvr():
    def __init__(self):
        self.conf = load_conf()

    def cancel_delivery(self, api_key, id):
        conf = self.conf["sdk-cancel-dlvr"]
        url = conf["url"].format(self._id(id))
        headers = conf["headers"]
        headers["Authorization"] = api_key

        response = requests.request(
            "POST",
            url,
            headers=headers,
            timeout=3)

        return response

    def _id(self, value):
        if type(value) != str:
            raise Exception("id expect a string")

        return value
