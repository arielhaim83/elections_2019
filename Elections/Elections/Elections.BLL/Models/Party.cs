using System;

namespace Elections.BLL.Models
{
    public class Party
    {
        public int Id { get; set; }
        public string Name { get; set; }        
        public DateTime CreatedTimestamp { get; set; }        
    }
}
