"""
Deliveree SDK
With Deliveree SDK, developers can integrate our on-demand local delivery
platform into their applications. The SDK is designed for developers to
check prices, book an immediate or scheduled delivery and follow updates until
delivery completion.

Contact: duke@deliveree.com
"""

from sdk_package.sdk_quote import SDKquote
from sdk_package.sdk_get_vehicle_type import SdkGetVehicleType
from sdk_package.sdk_get_list_dlvr import SdkGetListDlvr
from sdk_package.sdk_get_delivery import SdkGetDelivery
from sdk_package.sdk_create_delivery import SdkCreateDlvr
from sdk_package.sdk_cancel_dlvr import SdkCancelDlvr


class SdkPython():
    def __init__(self):
        self._quote = SDKquote()
        self._vehicle = SdkGetVehicleType()
        self._list_dlvr = SdkGetListDlvr()
        self._get_dlvr = SdkGetDelivery()
        self._create_dlvr = SdkCreateDlvr()
        self._cancel = SdkCancelDlvr()

    def get_quote(
        self,
        api_key,
        time_type,
        pickup_time,
        vehicle_type_id,
        packs,
        locations
    ):

        return self._quote.sdk_quote_conn(
            api_key,
            time_type,
            pickup_time,
            vehicle_type_id,
            packs,
            locations
        )

    def get_vehicle_types(self, api_key):
        return self._vehicle.get_vehicle_type(api_key)

    def get_list_dlvr(self, api_key):
        return self._list_dlvr.get_deliveries_list(api_key)

    def get_dlvr(self, api_key, id):
        return self._get_dlvr.get_delivery_detail(api_key, id)

    def create_dlvr(
        self,
        api_key,
        vehicle_type_id,
        note,
        time_type,
        pickup_time,
        job_order_number,
        locations
    ):

        return self._create_dlvr.sdk_create_dlvr_conn(
            api_key,
            vehicle_type_id,
            note,
            time_type,
            pickup_time,
            job_order_number,
            locations
        )

    def cancel_dlvr(self, api_key, id):
        return self._cancel.cancel_delivery(api_key, id)