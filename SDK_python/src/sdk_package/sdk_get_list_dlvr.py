<<<<<<< HEAD
"""
Deliveree SDK
With Deliveree SDK, developers can integrate our on-demand local delivery
platform into their applications. The SDK is designed for developers to
list bookings.

Contact: duke@deliveree.com
"""

=======
>>>>>>> 852bf343d80c5dafa613398f3df5ed693b6d25fb
import requests
from utils import load_conf


class SdkGetListDlvr():
    def __init__(self):
        self.conf = load_conf()

    def get_deliveries_list(self, api_key):
        conf = self.conf["sdk-list-dlvr"]
        url = conf["url"]
        headers = conf["headers"]
        headers["Authorization"] = api_key

        response = requests.request(
            "GET",
            url,
            headers=headers,
            timeout=3)

        return response.text
