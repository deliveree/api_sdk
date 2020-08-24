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
