using System;
using System.ComponentModel.DataAnnotations;

namespace Elections.API.Models
{
    /// <summary>
    /// Car type
    /// </summary>
    public class Party
    {
        /// <summary>
        /// Car id
        /// </summary>
        public int Id { get; set; }
        /// <summary>
        /// Car model name
        /// </summary>
        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Name { get; set; }      
        /// <summary>
        /// CreatedOn
        /// </summary>
        public DateTime CreatedTimestamp { get; set; }
    }
}
