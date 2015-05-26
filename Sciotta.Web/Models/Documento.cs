using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Sciotta.Web.Models
{
    public class Documento
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public Emitente Emitente { get; set; }
        public DateTime DataCriado { get; set; }

        public static List<Documento> GetAll()
        {
            var emitente1 = new Emitente {Id = 1, Nome = "João"};
            var emitente2 = new Emitente {Id = 2, Nome = "Maria"};

            return new List<Documento>
            {
                new Documento
                {
                    Id = 1,
                    Emitente = emitente1,
                    DataCriado = DateTime.Now,
                    Titulo = "João e o pé de feijão"
                },
                new Documento
                {
                    Id = 2,
                    Emitente = emitente2,
                    DataCriado = DateTime.Now.AddDays(-10),
                    Titulo = "Maria vai com as outras"
                }
            };
        }

        public static Documento GetDocumento(int id)
        {
            return GetAll().FirstOrDefault(t => t.Id == id);
        }
    }
}