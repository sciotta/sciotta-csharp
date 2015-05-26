using System.Collections.Generic;
using System.Threading;
using System.Web.Http;
using AutoMapper;
using Sciotta.Web.Controllers.Base;
using Sciotta.Web.Models;

namespace Sciotta.Web.Controllers
{
    public class DocumentosController : AuthenticatedApiControllerBase
    {
        public IEnumerable<DocumentoVM> Get()
        {
            var documentos = Documento.GetAll();
            Mapper.CreateMap<Documento, DocumentoVM>();
            return Mapper.Map<IEnumerable<DocumentoVM>>(documentos);
        }

        public DocumentoVM Get(int id)
        {
            var documento = Documento.GetDocumento(id);
            Mapper.CreateMap<Documento, DocumentoVM>();
            return Mapper.Map<DocumentoVM>(documento);
        }

        public void Post([FromBody]string value)
        {
        }

        public void Put(int id, [FromBody]string value)
        {
        }

        public void Delete(int id)
        {
        }
    }
}