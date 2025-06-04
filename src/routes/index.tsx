import { ExhibitionViewerLogo } from "@/components/ExhibitionViewerLogo";
import { HomepageFeature } from "@/components/HomepageFeature";
import { PresenetationPreview } from "@/components/PresentationPreview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen">
      <div className="py-12 md:py-24 px-4 flex flex-col items-center gap-8 md:gap-16 mb-8 md:mb-16">
        {/* <div className="text-[10em]">
          <ExhibitionViewerLogo />
        </div> */}
        <h1 className="text-3xl md:text-5xl font-bold text-center">IIIF Exhibition Viewer</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center px-4">
          Exhibition Viewer enables the presentation of interactive online
          exhibitions either as a standalone website or embedded into an
          existing site.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <a
            href="/docs/getting-started"
            className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
          >
            Get started
          </a>
          <a
            href="/preview/delft"
            className="text-blue-700 hover:text-blue-500 py-2 px-4 rounded text-center border border-blue-700 sm:border-0"
          >
            See Example
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* LIST OF FEATURES.  */}
        <HomepageFeature
          title="Standalone scrollable web page exhibitions"
          description="A standard HTML view of the exhibition is available for users to explore, scrolling through the material as it is structured. This enables you to layout your exhibition in a specific order, with additional controls including annotations that enable users to be directed to specific images, regions within images, text or AV content. Users can navigate through that with the ability to interact with each section with a modal view presenting summary information, the full image(s) or AV material."
          image="/demo-01.png"
          imageAlt="view of exhibition viewer for delft"
        />

        <HomepageFeature
          title="Supports linear and user directed exhibition interaction"
          description="Users often approach exhibitions with their own ideas about what to explore and in what order. The Exhibition Viewer allows users to navigate quickly to areas of interest in multiple ways, they can scroll ahead and click into the content they want to see; move through curated displays using links, whilst a table of contents provides users with the ability to find and navigate to a specific section of the exhibition."
          image="/exhibition-viewer-3.jpg"
          imageAlt="view of exhibition viewer for delft"
          imageRight
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4 text-base md:text-lg mb-16 md:mb-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Engaging discovery experiences
        </h2>
        <p>
          Exhibition Viewer enables the presentation of interactive online
          exhibitions either as a standalone website or embedded into an
          existing site.
        </p>
        <p>
          It acts as a IIIF viewer that 'plays' exhibitions that are each
          constructed as a IIIF Manifest with additional 'behaviours' that can
          be associated via the IIIF Manifest Editor. Because the exhibition is
          ultimately a IIIF Manifest it is still fully interoperable with any
          IIIF compliant software for wider dissemination and engagement.
        </p>
        <div className="w-full h-[300px] md:h-[550px] bg-[rgb(55,55,55)]">
          <PresenetationPreview
            language="en"
            options={{ autoPlay: true }}
            url="https://heritage.tudelft.nl/iiif/manifests/irrigation-knowledge/manifest.json"
          />
        </div>
        <p>
          The additional behaviours are interpreted by an Exhibition Viewer
          Template to provide the look and feel, layout and interaction
          required. New Templates can be created to match your requirements,
          this is a very flexible framework that does not impose constraints on
          the user experience.
        </p>
        <p>
          Some example Template implementations are shown below. You can adopt
          what has been implemented by these current examples or start from
          scratch using the documentation provided. The Digirati team also
          provide services to design and build these exhibitions, please feel
          free to get in touch!
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        <HomepageFeature
          title="Create your digital exhibitions using IIIF"
          description="You can develop your exhibitions by creating a new IIIF Manifest, adding the assets and content you want to display. Equally you can construct your exhibition combining content from your existing IIIF content or mixing it with other published IIIF content. The exhibition IIIF Manifest produced can be displayed in other IIIF viewers with standard navigation and display, allowing for its reuse in differing ways on your website or other websites."
          image="/exhibition-viewer-1.jpg"
          imageAlt="view of exhibition viewer for delft"
        />
      </div>

      <div className="mb-16 md:mb-32 px-4 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Examples</h2>
        <div className="w-full h-[400px] md:h-[800px] bg-[rgb(55,55,55)] rounded-lg overflow-hidden">
          <PresenetationPreview
            language="en"
            options={{ autoPlay: true }}
            url="https://stephenwf.github.io/ocean-liners.json"
          />
        </div>
      </div>
    </div>
  );
}
