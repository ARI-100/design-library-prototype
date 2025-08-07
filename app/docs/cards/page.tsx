import { Card } from "@/app/components/display/Card";
import { Button } from "@/app/components/inputs/Button";
import styles from "./page.module.css";

export default function CardsPage() {
  const examples = [
    {
      name: "Default Horizontal",
      component: (
        <Card
          title="Card Title"
          description="This is a default card with horizontal layout and no media."
          actions={<Button size="small">Action</Button>}
        />
      ),
      usage: '<Card title="Card Title" description="Description" actions={<Button>Action</Button>} />'
    },
    {
      name: "With Icon",
      component: (
        <Card
          title="Icon Card"
          description="This card has an icon in the media section."
          mediaType="icon"
          icon="📱"
          actions={<Button size="small">View</Button>}
        />
      ),
      usage: '<Card title="Icon Card" mediaType="icon" icon="📱" actions={<Button>View</Button>} />'
    },
    {
      name: "With Image",
      component: (
        <Card
          title="Image Card"
          description="This card has an image in the media section."
          mediaType="image"
          imageSrc="https://via.placeholder.com/160x160"
          imageAlt="Placeholder image"
          actions={<Button size="small">Details</Button>}
        />
      ),
      usage: '<Card title="Image Card" mediaType="image" imageSrc="..." imageAlt="..." />'
    },
    {
      name: "Vertical Layout",
      component: (
        <Card
          title="Vertical Card"
          description="This card uses vertical layout with an icon."
          layout="vertical"
          mediaType="icon"
          icon="🎨"
          actions={<Button size="small">Learn More</Button>}
        />
      ),
      usage: '<Card title="Vertical Card" layout="vertical" mediaType="icon" icon="🎨" />'
    },
    {
      name: "Stroked Variant",
      component: (
        <Card
          title="Stroked Card"
          description="This card uses the stroked variant with a border."
          variant="stroked"
          mediaType="icon"
          icon="✨"
          actions={<Button size="small" variant="subtle">Dismiss</Button>}
        />
      ),
      usage: '<Card title="Stroked Card" variant="stroked" mediaType="icon" icon="✨" />'
    }
  ];

  return (
    <div>
      <h1 className={styles.heading}>Cards</h1>
      <p>Cards are versatile containers that can display content with optional media, actions, and different layouts. They're perfect for displaying information in a structured way.</p>
      
      <h2 className={styles.sectionHeading}>Examples</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Variant</th>
            <th className={styles.th}>Example</th>
            <th className={styles.th}>Usage</th>
          </tr>
        </thead>
        <tbody>
          {examples.map((example) => (
            <tr key={example.name}>
              <td className={styles.td}>{example.name}</td>
              <td className={styles.td}>
                <div className={styles.example}>{example.component}</div>
              </td>
              <td className={styles.td}>
                <code className={styles.code}>{example.usage}</code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className={styles.sectionHeading}>Card Grid</h2>
      <div className={styles.cardGrid}>
        <Card
          title="Design System"
          description="A comprehensive design system with reusable components and consistent styling."
          mediaType="icon"
          icon="🎨"
          actions={<Button size="small">Explore</Button>}
        />
        <Card
          title="Components"
          description="Building blocks for creating beautiful and functional user interfaces."
          mediaType="icon"
          icon="🧩"
          actions={<Button size="small">View All</Button>}
        />
        <Card
          title="Documentation"
          description="Complete guides and examples for implementing design system components."
          mediaType="icon"
          icon="📚"
          actions={<Button size="small">Read</Button>}
        />
      </div>

      <h2 className={styles.sectionHeading}>Props</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Prop</th>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Default</th>
            <th className={styles.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}><code className={styles.code}>variant</code></td>
            <td className={styles.td}>"default" | "stroked"</td>
            <td className={styles.td}>"default"</td>
            <td className={styles.td}>Visual variant of the card</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>layout</code></td>
            <td className={styles.td}>"horizontal" | "vertical"</td>
            <td className={styles.td}>"horizontal"</td>
            <td className={styles.td}>Layout direction</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>mediaType</code></td>
            <td className={styles.td}>"icon" | "image" | "none"</td>
            <td className={styles.td}>"none"</td>
            <td className={styles.td}>Type of media to display</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>icon</code></td>
            <td className={styles.td}>ReactNode</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Icon element (for mediaType="icon")</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>imageSrc</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Image source (for mediaType="image")</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>imageAlt</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>""</td>
            <td className={styles.td}>Image alt text</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>title</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Card title (required)</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>description</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Card description</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>actions</code></td>
            <td className={styles.td}>ReactNode</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Action buttons or elements</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>onClick</code></td>
            <td className={styles.td}>() =&gt; void</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Click handler for the entire card</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 