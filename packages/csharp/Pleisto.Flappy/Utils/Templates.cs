using Mustache;
using System.Reflection;

namespace Pleisto.Flappy.Utils
{
    internal static class TemplateRenderer
    {
        public static IEnumerable<string> Templates
           => from i in CurrentAssembly.GetManifestResourceNames()
              where i.EndsWith(".mustache")
              select i;

        private static readonly Assembly CurrentAssembly = Assembly.GetExecutingAssembly();

        /// <summary>
        /// Read template original string
        /// </summary>
        /// <param name="name">
        /// Template name
        /// e.g features.synthesized.systemMessage.mustache or features.synthesized.systemMessage
        /// </param>
        /// <returns></returns>
        public static string GetTemplate(string name)
        {
            if (!name.EndsWith(".mustache"))
                name += ".mustache";

            var resourcesName = $"Pleisto.Flappy." + name;

            using (var resource = CurrentAssembly.GetManifestResourceStream(resourcesName))
            {
                if (resource == null)
                    throw new KeyNotFoundException($"{name} >> {resourcesName}");
                using (var sr = new StreamReader(resource))
                {
                    return sr.ReadToEnd();
                }
            }
        }

        /// <summary>
        /// Read template original string
        /// </summary>
        /// <param name="name">
        /// Template name
        /// e.g features.synthesized.systemMessage.mustache or features.synthesized.systemMessage
        /// </param>
        /// <param name="argument">render argument</param>
        /// <returns></returns>
        public static string Render(string name, Dictionary<string, object> argument)
        {
            FormatCompiler compiler = new FormatCompiler();
            Generator generator = compiler.Compile(GetTemplate(name));
            return generator.Render(argument);
        }
    }
}
