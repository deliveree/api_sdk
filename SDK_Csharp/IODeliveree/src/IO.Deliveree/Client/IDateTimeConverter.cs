/* 
 * Deliveree API
 *
 * With Deliveree API, developers can integrate our on-demand local delivery platform into their applications. The API is designed for developers to check prices, book an immediate or scheduled delivery and follow updates until delivery completion.
 *
 * 
 * Contact: duke@deliveree.com
 * Generated by: https://deliveree.com
 */
using Newtonsoft.Json.Converters;

namespace IO.Deliveree.Client
{
    /// <summary>
    /// Formatter for 'date' formats ss defined by full-date - RFC3339
    /// </summary>
    public class IDateTimeConverter : IsoDateTimeConverter
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="IDateTimeConverter" /> class.
        /// </summary>
        public IDateTimeConverter()
        {
            // full-date   = date-fullyear "-" date-month "-" date-mday
            DateTimeFormat = "yyyy-MM-dd";
        }
    }
}
