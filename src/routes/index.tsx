import { ExhibitionViewerLogo } from "@/components/ExhibitionViewerLogo";
import { HomepageFeature } from "@/components/HomepageFeature";
import { PresenetationPreview } from "@/components/PresentationPreview";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <div className="py-24 flex flex-col items-center gap-16 mb-16">
        <div className="text-[10em]">
          <ExhibitionViewerLogo />
        </div>
        <h1 className="text-5xl font-bold">IIIF Exhibition Viewer</h1>
        <p className="text-xl">
          Create Online Exhibitions with your IIIF Content
        </p>
        <div className="inline-flex gap-2">
          <a
            href="/docs/getting-started"
            className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Get started
          </a>
          <a
            href="/examples"
            className="text-blue-700 hover:text-blue-500 py-2 px-4 rounded"
          >
            See Examples
          </a>
        </div>
      </div>

      <div className="max-w-2xl mx-auto flex flex-col gap-4 text-lg mb-16">
        <p>
          Exhibition Viewer enables the presentation of interactive online
          exhibitions either as a standalone website or embedded into an
          existing site.
        </p>
        <p>
          It acts as a IIIF viewer that ‘plays’ exhibitions that are each
          constructed as a IIIF Manifest with additional ‘behaviours’ that can
          be associated via the IIIF Manifest Editor. Because the exhibition is
          ultimately a IIIF Manifest it is still fully interoperable with any
          IIIF compliant software for wider dissemination and engagement.
        </p>
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

      {/* LIST OF FEATURES.  */}
      <HomepageFeature
        title="Create Digital Exhibitions"
        description="IIIF Exhibition Viewer is a tool that allows you to create and view digital Exhibitions."
        image="/demo-01.png"
        imageAlt="view of exhibition viewer for delft"
      />

      <HomepageFeature
        title="Create Digital Exhibitions"
        description="IIIF Exhibition Viewer is a tool that allows you to create and view digital Exhibitions."
        image="/demo-01.png"
        imageAlt="view of exhibition viewer for delft"
        imageRight
      />

      <HomepageFeature
        title="Create Digital Exhibitions"
        description="IIIF Exhibition Viewer is a tool that allows you to create and view digital Exhibitions."
        image="/demo-01.png"
        imageAlt="view of exhibition viewer for delft"
      />

      <div>
        <h2 className="text-3xl font-bold mb-8">Examples</h2>
        <div className="w-full h-[650px] bg-[rgb(55,55,55)]">
          <PresenetationPreview
            language="en"
            options={{ autoPlay: true }}
            url="https://heritage.tudelft.nl/iiif/manifests/irrigation-knowledge/manifest.json"
          />
        </div>
      </div>
    </div>
  );
}
