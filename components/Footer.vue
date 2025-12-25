<template>
  <div class="footer">
    <div class="footer__top">
      <div class="footer__cta">
        <p class="footer__cta--subtitle">Is there a project?</p>
  
        <p class="footer__cta--title">Let’s work together</p>
      </div>
  
      <ul class="footer__contacts">
        <li class="footer__contacts--block">
          <p class="footer__contacts--title">
            For all questions
          </p>
  
          <NuxtLink
            to="tel: +7 (920) 278—00—68"
            class="footer__contacts--contact"
          >
            +7 (920) 278—00—68
          </NuxtLink>
          <NuxtLink
            to="mailto: qtim@agency.com"
            class="footer__contacts--contact"
          >
            qtim@agency.com
          </NuxtLink>
        </li>
  
        <li class="footer__contacts--block">
          <p class="footer__contacts--title">
            Office in Russia
          </p>
  
          <p class="footer__contacts--contact">
            139 Ruben Station Lake Drew, NM 52678
          </p>
  
          <NuxtLink>
            <NuxtImg
              src="/images/location.svg"
              class="footer__contacts--contact-logo"
              width="32"
              height="32"
            />
          </NuxtLink>
        </li>
  
        <li class="footer__contacts--block">
          <p class="footer__contacts--title">
            Office in Dubai
          </p>
  
          <p class="footer__contacts--contact">
            139 Ruben Station Lake Drew, NM 52678
          </p>
  
          <NuxtLink>
            <NuxtImg
              src="/images/location.svg"
              class="footer__contacts--contact-logo"
              width="32"
              height="32"
            />
          </NuxtLink>
        </li>
      </ul>
    </div>

      <ul class="footer__bottom">
        <li class="footer__bottom__link">
          <NuxtLink
            to="#"
            target="_blank"
          >
            Facebook
          </NuxtLink>
        </li>
        <li class="footer__bottom__link">
          <NuxtLink
            to="#"
            target="_blank"
          >
            Instagram
          </NuxtLink>
        </li>
        <li class="footer__bottom__link">
          <NuxtLink
            to="#"
            target="_blank"
          >
            Telegram
          </NuxtLink>
        </li>
        <li class="footer__bottom__link">
          <NuxtLink
            to="#"
            target="_blank"
          >
            Behance
          </NuxtLink>
        </li>
        <li class="footer__bottom__link">
          <NuxtLink
            to="#"
            target="_blank"
          >
            Linkedn
          </NuxtLink>
        </li>
        <li class="footer__bottom__link">
          <NuxtLink
            to="#"
            target="_blank"
          >
            Privacy Policy
          </NuxtLink>
        </li>
      </ul>

      <button class="footer__circle">
        <span>Go</span>
      </button>
  </div>
</template>

<script setup lang='ts'>

</script>

<style scoped>
.footer {
  padding-top: 140px;
  padding-bottom: 30px;
  min-height: 900px;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  background-color: var(--clr-purple-light);
  position: relative;
  overflow: hidden;
}

.footer__top {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.footer__cta {
  grid-column: 1/7;
}

.footer__cta--subtitle {
  margin-bottom: 56px;
}

.footer__cta--title {
  font-size: var(--fz-xxl);
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.1em;
}

.footer__contacts {
  grid-column: 9/-1;
  padding-top: 75px;
  height: min-content;
  max-width: 109px;
  display: grid;
  gap: 36px;
}

.footer__contacts--block {
  font-size: var(--fz-sm);
  display: grid;
}

.footer__contacts--title {
  margin-bottom: 12px;
  line-height: 1.2;
}

.footer__contacts--contact {
  line-height: 1.2;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
}

.footer__contacts--contact-logo {
  width: 32px;
  height: 32px;
  transition: opacity 300ms ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}

.footer__bottom {
  display: flex;
  gap: 2rem;
}

.footer__bottom__link {
  text-decoration: underline;
  text-underline-offset: 0.4em;
  transition: color 300ms ease;

  &:hover {
    color: var(--clr-white);
  }
}

.footer__bottom__link:nth-child(3) {
  margin-right: auto;
}

.footer__circle {
  width: 25vw;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--clr-black-dark);
  color: var(--clr-white);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: transform 500ms ease;

  &:hover {
    transform: translate(-50%, 20%);

    span {
      transform: translateY(0);
    }
  }

  span {
    font-size: 2rem;
    transform: translateY(-1rem);
    transition: transform 500ms ease;
  }
}
</style>
