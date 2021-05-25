using System;
using System.Collections.Generic;
using System.Diagnostics;
using IO.Deliveree.Api;
using IO.Deliveree.Client;
using IO.Deliveree.Model;
using IO.Deliveree.Model.Reponse;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace ConsoleNetCore
{
    class Program
    {
        static void Main(string[] args)
        {
            Configuration.Default.ApiKey.Add("Authorization", "_v1MhCyxVohbhWsbJ5x3");
            DeliveryGetQuotes();
            //VehicleTypesGet();
            //AddDelivery();
            //DeliveryGetList();
            //DeliveryGet(17848);
            //CancelBooking(17844);
        }

        /// <summary>
        /// Add deliveree booking with full status code return
        /// </summary>
        public static void AddDelivery()
        {
            var apiInstance = new DelivereeApi();
            Delivery body = new Delivery
            {
                VehicleTypeId = 62,
                JobOrderNumber = "6666",
                TimeType = "schedule",
                PickupTime = DateTime.Parse("2016-05-13T09:51:16+07:00"),
                Note = "Fine - Fragile item that needs good care",
                Locations = new List<Location>
                {
                    new Location
                    {
                        Address = "Testing. Sultan Iskandar Muda No.21, Arteri Pondok Indah",
                        Latitude = -6.2608232,
                        Longitude = 106.7884168,
                        RecipientName = "Justin",
                        RecipientPhone = "+84903398399",
                        Note = "Second floor, room 609"
                    },
                    new Location
                    {
                        Address = "Testing Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1",
                        Latitude = -6.2608232,
                        Longitude = 106.7884168,
                        RecipientName = "Tong",
                        RecipientPhone = "+84903398399",
                        Note = "Second floor, room 609",
                        NeedCod = true,
                        NeedPod = true,
                        CodInvoiceFees = 5000,
                        PodNote = "You need to do ..."
                    }
                }
            };

            try
            {
                ApiResponse<DeliveryResponse> result = apiInstance.DeliveriesPostWithHttpInfo(body);
                Console.WriteLine(result.StatusCode);
            }
            catch (Exception e)
            {
                Debug.Print("Exception: " + e.Message);
            }

            Console.ReadKey();

        }

        /// <summary>
        /// DeliveryGet
        /// </summary>
        public static void DeliveryGet(int id)
        {
            var apiInstance = new DelivereeApi();

            try
            {
                ApiResponse<DeliveryResponse> result = apiInstance.DeliveriesGetWithHttpInfo(id);
                Console.WriteLine(result.Data);
            }
            catch (Exception e)
            {
                Debug.Print("Exception: " + e.Message);
            }

            Console.ReadKey();

        }

        /// <summary>
        /// DeliveryGetList 
        /// </summary>
        public static void DeliveryGetList()
        {
            var apiInstance = new DelivereeApi();

            try
            {
                ApiResponse<ListDeliveryResponse> result = apiInstance.DeliveriesGetListWithHttpInfo(1,1);
                Console.WriteLine(result.Data.ToString());
            }
            catch (Exception e)
            {
                Debug.Print("Exception: " + e.Message);
            }

            Console.ReadKey();
        }
        /// <summary>
        /// DeliveriesGetQuotes 
        /// </summary>
        public static void DeliveryGetQuotes()
        {
            var apiInstance = new DelivereeApi();
            var body = new Quote
            {
                TimeType = "now",
                Locations = new List<Location>
                {
                    new Location
                    {
                        Address = "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
                        Latitude = -6.2608232,
                        Longitude = 106.7884168
                    }
                }
            };

            try
            {
                ApiResponse<QuoteResponses> result = apiInstance.DeliveriesGetQuotePostWithHttpInfo(body);
                Console.WriteLine(result.Data.ToString());
            }
            catch (Exception e)
            {
                Debug.Print("Exception: " + e.Message);
            }

            Console.ReadKey();
        }

        /// <summary>
        /// VehicleTypesGet 
        /// </summary>
        public static void VehicleTypesGet()
        {
            var apiInstance = new DelivereeApi();

            try
            {
                ApiResponse<VehicleTypeResponses> result = apiInstance.VehicleTypesGetWithHttpInfo();
                Console.WriteLine(result.Data.ToString());
            }
            catch (Exception e)
            {
                Debug.Print("Exception: " + e.Message);
            }

            Console.ReadKey();
        }

        /// <summary>
        /// CancelBooking
        /// </summary>
        /// <param name="id"></param>
        public static void CancelBooking(int id)

        {
            var apiInstance = new DelivereeApi();
            try
            {
                ApiResponse obj = apiInstance.CancelBookingWithHttpInfo(id);
                Console.Write(obj.StatusCode);

            }
            catch (Exception e)
            {
                Console.Write("Exception: " + e.Message);
            }
            
            Console.ReadKey();

        }
    }
}
