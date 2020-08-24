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
