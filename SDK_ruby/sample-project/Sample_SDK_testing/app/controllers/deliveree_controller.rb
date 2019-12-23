class DelivereeController < ApplicationController
  def index
  end

  def get_quotes
    deliveree = Deliveree::DelivereeApi.new
    location = {
      address:
        "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
      latitude: -6.2608232,
      longitude: 106.7884168
    }

    body = Deliveree::Quote.new({time_type: "now", locations: [Deliveree::Location.new( location)]})

    begin
      @result = deliveree.deliveries_get_quote(body)
    rescue Deliveree::ApiError => e
      @error = e
      puts "exception #{e}"
    end
  end

  def create_booking
    deliveree = Deliveree::DelivereeApi.new
    tDate = DateTime.now.to_s
    delivery = {
     vehicle_type_id: 62,
     note: "Testing - API Default Fragile item that needs good care Welcome.",
     time_type: "schedule",
     pickup_time: "2016-05-13T09:51:16+07:00",
     job_order_number: "66666",
     locations: [
       {
         address:
           tDate +
             "Jl. Sultan Iskandar Muda No.21, Arteri Pondok Indah, Pd. Pinang, Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
         latitude: -6.2608232,
         longitude: 106.7884168,
         recipient_name: "Duke",
         recipient_phone: "+84903398399",
         note: "Second floor, room 609"
       },
       {
         address:
           tDate +
             "Gedung Inti Sentra, Jl. Taman Kemang, RT.14/RW.1, Bangka, Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, Indonesia",
         latitude: -6.2608232,
         longitude: 106.7884168,
         recipient_name: "Nam",
         recipient_phone: "+84903856534",
         note: "First floor, right room.",
         need_cod: true,
         cod_note: "You need to get money from Nam",
         cod_invoice_fees: 5000,
         need_pod: true,
         pod_note: "You need to ..."
       }
     ]
   }
    begin
      @deliver = deliveree.deliveries_post(delivery)
      puts @deliver
    rescue Deliveree::ApiError => e
      @error = e
      puts "exception #{e}"
    end
  end

  def cancel_booking
    deliveree = Deliveree::DelivereeApi.new
    booking_id = 17463
    begin
      @result = deliveree.cancel_booking(booking_id)
      puts @result
    rescue Deliveree::ApiError => e
      puts "exception #{e}"
      @err = e
    end
  end

end
