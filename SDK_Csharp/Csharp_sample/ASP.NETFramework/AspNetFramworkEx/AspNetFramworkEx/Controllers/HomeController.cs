using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Ajax;
using IO.Deliveree.Api;
using IO.Deliveree.Client;
using IO.Deliveree.Model;
using Newtonsoft.Json.Linq;

namespace AspNetFramworkEx.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var mvcName = typeof(Controller).Assembly.GetName();
            var isMono = Type.GetType("Mono.Runtime") != null;

            ViewData["Version"] = mvcName.Version.Major + "." + mvcName.Version.Minor;
            ViewData["Runtime"] = isMono ? "Mono" : ".NET";
            if (!Configuration.Default.ApiKey.ContainsKey("Authorization"))
            {
                Configuration.Default.ApiKey.Add("Authorization", "ZrfYRQAzqMS9BH8QQhxa");
            }

            ViewData["apiData"] = DeliveryGetQuotes();
           // ViewData["apiData"] = AddDelivery();
            //ViewData["apiData"] = CancelBooking(19921);
            return View();
        }

        /// <summary>
        /// Add deliveree booking with full status code return
        /// </summary>
        public static string AddDelivery()
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
                      Address = "TMA testing. Sultan Iskandar Muda No.21, Arteri Pondok Indah",
                      Latitude = (double)-6.2608232,
                      Longitude = (double)106.7884168,
                      RecipientName = "Justin",
                      RecipientPhone = "+84903398399",
                      Note = "Second floor, room 609"
                    },
                    new Location
                    {
                      Address = "TMA testing Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1",
                      Latitude = (double)-6.2608232,
                      Longitude = (double)106.7884168,
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
                ApiResponse<JToken> result = apiInstance.DeliveriesPostWithHttpInfo(body);
                return result.Data.ToString();
            }
            catch (Exception e)
            {
                return ("Exception: " + e.Message);
            }

        }

        /// <summary>
        /// DeliveriesGetQuotes 
        /// </summary>
        public static string DeliveryGetQuotes()
        {
            var apiInstance = new DelivereeApi();

            var body = new Quote {
                TimeType = "now",
                Locations = new List<Location>
                {
                    new Location
                    {
                      Address = "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
                      Latitude = (double)-6.2608232,
                      Longitude = (double)106.7884168
                    }
                }
            };

            try
            {
                ApiResponse<JToken> result = apiInstance.DeliveriesGetQuotePostWithHttpInfo(body);

                return result.Data.ToString();
            }
            catch (Exception e)
            {
                return "Exception when calling DeliveriesApi.DeliveriesGetQuotePost: " + e.Message;
            }
        }

        /// <summary>
        /// CancelBooking
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public static string CancelBooking(int id)

        {
            var apiInstance = new DelivereeApi();
            try
            {
                ApiResponse obj = apiInstance.CancelBookingWithHttpInfo(id);
                return obj.StatusCode.ToString();
            }
            catch (Exception ex)
            {
                return "Exception" + ex.Message.ToString(); 
            }
            
        }
    }
}
