using System;

namespace Elections.DAL.MySql.Models
{
    public class PartyEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }       
        public DateTime CreatedTimestamp { get; set; }        
    }
}
