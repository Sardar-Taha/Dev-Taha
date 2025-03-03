import { Page, PageAnimatorWrapper } from "./element";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

function PageAnimator() {
  return (
    <div>
      <PageAnimatorWrapper key={"nav"}>
        {data.map((item, index) => (
          <Page
            className={
              (index % 2 === 1 && "odd") ||
              (index === 0 && "no-border") ||
              (index === 4 && "no-right-border")
            }
            initial={index % 2 === 0 ? { y: -1000 } : { y: 1000 }}
            animate={{ y: 0 }}
            transition={{ delay: index * 0.1, duration: 1 }}
            exit={index % 2 === 1 ? { y: -1000 } : { y: 1000 }}
          />
        ))}
      </PageAnimatorWrapper>
    </div>
  );
}

export default PageAnimator;
