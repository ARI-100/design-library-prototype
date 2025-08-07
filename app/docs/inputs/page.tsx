import { TextInput } from "@/app/components/inputs/TextInput";
import { Button } from "@/app/components/inputs/Button";
import styles from "./page.module.css";

export default function InputsPage() {
  const examples = [
    {
      name: "Default",
      component: <TextInput id="default" placeholder="Enter text..." />,
      usage: '&lt;TextInput id=&quot;default&quot; placeholder=&quot;Enter text...&quot; /&gt;'
    },
    {
      name: "With Label",
      component: <TextInput id="with-label" label="Email Address" placeholder="Enter your email..." />,
      usage: '&lt;TextInput id=&quot;with-label&quot; label=&quot;Email Address&quot; placeholder=&quot;Enter your email...&quot; /&gt;'
    },
    {
      name: "With Helper Text",
      component: <TextInput id="with-helper" label="Password" type="password" helperText="Must be at least 8 characters" />,
      usage: '&lt;TextInput id=&quot;with-helper&quot; label=&quot;Password&quot; type=&quot;password&quot; helperText=&quot;Must be at least 8 characters&quot; /&gt;'
    },
    {
      name: "Error State",
      component: <TextInput id="error" label="Email" state="error" errorMessage="Please enter a valid email address" />,
      usage: '&lt;TextInput id=&quot;error&quot; label=&quot;Email&quot; state=&quot;error&quot; errorMessage=&quot;Please enter a valid email address&quot; /&gt;'
    },
    {
      name: "Disabled",
      component: <TextInput id="disabled" label="Disabled Field" state="disabled" value="Cannot edit this" />,
      usage: '&lt;TextInput id=&quot;disabled&quot; label=&quot;Disabled Field&quot; state=&quot;disabled&quot; value=&quot;Cannot edit this&quot; /&gt;'
    }
  ];

  return (
    <div>
      <h1 className={styles.heading}>Text Inputs</h1>
      <p>Text inputs allow users to enter and edit text. They support different states like default, error, and disabled, along with helper text and validation messages.</p>
      
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

      <h2 className={styles.sectionHeading}>Form Example</h2>
      <div className={styles.example}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextInput id="name" label="Full Name" placeholder="Enter your full name" />
          <TextInput id="email" label="Email Address" type="email" placeholder="Enter your email" />
          <TextInput id="password" label="Password" type="password" helperText="Must be at least 8 characters" />
          <Button type="submit">Submit</Button>
        </form>
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
            <td className={styles.td}><code className={styles.code}>label</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Label text displayed above the input</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>state</code></td>
            <td className={styles.td}>"default" | "error" | "disabled"</td>
            <td className={styles.td}>"default"</td>
            <td className={styles.td}>State of the input field</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>errorMessage</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Error message to display when state is "error"</td>
          </tr>
          <tr>
            <td className={styles.td}><code className={styles.code}>helperText</code></td>
            <td className={styles.td}>string</td>
            <td className={styles.td}>-</td>
            <td className={styles.td}>Helper text to display below the input</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 