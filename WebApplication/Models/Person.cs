using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Models
{
    public class Person
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
        [JsonProperty("jmeno")]
        public string Name { get; set; }
        [JsonProperty("prijmeni")]
        public string LastName { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd. MM. yyyy}")]
        public DateTime Date { get; set; }
    }
}
