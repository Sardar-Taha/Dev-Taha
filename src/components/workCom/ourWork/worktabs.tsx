import { Tabs } from "antd";
import { TabsWrapper, WarningDiv } from "./element";
import WorkTabContent from "./workTabContent";
import { useState } from "react";
import { NoDataCom } from "components";
import { data } from "./data";
import { AiFillCloseCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const items = [
  {
    key: "1",
    label: `ALL`,
    category: null, // No specific category filter for "ALL" tab
  },
  {
    key: "2",
    label: `UI/UX Design`,
    category: "ui/ux",
  },
  {
    key: "3",
    label: `Frontend`,
    category: "frontend",
  },
  {
    key: "4",
    label: `Full Stack`,
    category: "full stack",
  },
];

function Worktabs() {
  const [activeTab, setActiveTab] = useState(items[0].key); // Set the default active tab
  const [showWarning, setShowWarning] = useState(true);

  const getCategoryByKey = (key) => {
    const item = items.find((item) => item.key === key);
    return item ? item.category : null;
  };

  // Handle tab change event
  const handleTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <TabsWrapper>
      <Tabs
        defaultActiveKey={items[0].key}
        activeKey={activeTab}
        onChange={handleTabChange}
        centered
      >
        {items?.map((item) => {
          const tabData =
            item.key === items[0].key
              ? data // For "ALL" tab, show all data
              : data.filter(
                  (project) => project.category === getCategoryByKey(item.key)
                );

          return (
            <Tabs.TabPane key={item.key} tab={item.label}>
              {tabData.length > 0 ? (
                <>
                  {activeTab == "3" && showWarning && (
                    <WarningDiv
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.25 }}
                    >
                      Please Note: I am solely responsible for the development
                      of the frontend code and the frontend functionality of
                      these web apps. The design of these web apps has been
                      created by another individual. Furthermore, it is crucial
                      to understand that most of these websites are properties
                      of the company I work for, and I do not possess the rights
                      to authorize their design usage or replication.
                      <AiFillCloseCircle
                        className="close-icon"
                        onClick={() => setShowWarning(false)}
                      />
                    </WarningDiv>
                  )}
                  <WorkTabContent filteredData={tabData} />
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <NoDataCom />
                </motion.div>
              )}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
    </TabsWrapper>
  );
}

export default Worktabs;
