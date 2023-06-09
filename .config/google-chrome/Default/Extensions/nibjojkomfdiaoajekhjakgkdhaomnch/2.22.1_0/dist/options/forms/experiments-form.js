'use strict'
/* eslint-env browser, webextensions */

import browser from 'webextension-polyfill'
import html from 'choo/html/index.js'
import switchToggle from '../../pages/components/switch-toggle.js'

export default function experimentsForm ({
  useLatestWebUI,
  displayNotifications,
  displayReleaseNotes,
  catchUnhandledProtocols,
  linkify,
  recoverFailedHttpRequests,
  detectIpfsPathHeader,
  logNamespaces,
  onOptionChange
}) {
  const onDisplayNotificationsChange = onOptionChange('displayNotifications')
  const onDisplayReleaseNotesChange = onOptionChange('displayReleaseNotes')
  const onUseLatestWebUIChange = onOptionChange('useLatestWebUI')
  const onCatchUnhandledProtocolsChange = onOptionChange('catchUnhandledProtocols')
  const onLinkifyChange = onOptionChange('linkify')
  const onrecoverFailedHttpRequestsChange = onOptionChange('recoverFailedHttpRequests')
  const onDetectIpfsPathHeaderChange = onOptionChange('detectIpfsPathHeader')

  return html`
    <form>
      <fieldset class="mb3 pa1 pa4-ns pa3 bg-snow-muted charcoal">
        <h2 class="ttu tracked f6 fw4 teal mt0-ns mb3-ns mb1 mt2 ">${browser.i18n.getMessage('option_header_experiments')}</h2>
        <div class="mb2">${browser.i18n.getMessage('option_experiments_warning')}</div>
        <div class="flex-row-ns pb0-ns">
          <label for="useLatestWebUI">
            <dl>
              <dt>${browser.i18n.getMessage('option_useLatestWebUI_title')}</dt>
              <dd>${browser.i18n.getMessage('option_useLatestWebUI_description')}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'useLatestWebUI', checked: useLatestWebUI, onchange: onUseLatestWebUIChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="displayNotifications">
            <dl>
              <dt>${browser.i18n.getMessage('option_displayNotifications_title')}</dt>
              <dd>${browser.i18n.getMessage('option_displayNotifications_description')}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'displayNotifications', checked: displayNotifications, onchange: onDisplayNotificationsChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="displayReleaseNotes">
            <dl>
              <dt>${browser.i18n.getMessage('option_displayReleaseNotes_title')}</dt>
              <dd>${browser.i18n.getMessage('option_displayReleaseNotes_description')}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'displayReleaseNotes', checked: displayReleaseNotes, onchange: onDisplayReleaseNotesChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="catchUnhandledProtocols">
            <dl>
              <dt>${browser.i18n.getMessage('option_catchUnhandledProtocols_title')}</dt>
              <dd>${browser.i18n.getMessage('option_catchUnhandledProtocols_description')}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'catchUnhandledProtocols', checked: catchUnhandledProtocols, onchange: onCatchUnhandledProtocolsChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="recoverFailedHttpRequests">
            <dl>
              <dt>${browser.i18n.getMessage('option_recoverFailedHttpRequests_title')}</dt>
              <dd>${browser.i18n.getMessage('option_recoverFailedHttpRequests_description')}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'recoverFailedHttpRequests', checked: recoverFailedHttpRequests, onchange: onrecoverFailedHttpRequestsChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="linkify">
            <dl>
              <dt>${browser.i18n.getMessage('option_linkify_title')}</dt>
              <dd>${browser.i18n.getMessage('option_linkify_description')}</dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'linkify', checked: linkify, onchange: onLinkifyChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="detectIpfsPathHeader">
            <dl>
              <dt>${browser.i18n.getMessage('option_detectIpfsPathHeader_title')}</dt>
              <dd>${browser.i18n.getMessage('option_detectIpfsPathHeader_description')}
                <p><a class="link underline hover-aqua" href="https://docs.ipfs.tech/how-to/companion-x-ipfs-path-header/" target="_blank">
                  ${browser.i18n.getMessage('option_legend_readMore')}
                </a></p>
              </dd>
            </dl>
          </label>
          <div class="self-center-ns">${switchToggle({ id: 'detectIpfsPathHeader', checked: detectIpfsPathHeader, onchange: onDetectIpfsPathHeaderChange })}</div>
        </div>
        <div class="flex-row-ns pb0-ns">
          <label for="logNamespaces">
            <dl>
              <dt>${browser.i18n.getMessage('option_logNamespaces_title')}</dt>
              <dd>${browser.i18n.getMessage('option_logNamespaces_description')}</dd>
            </dl>
          </label>
          <input
            class="bg-white navy self-center-ns"
            id="logNamespaces"
            type="text"
            required
            onchange=${onOptionChange('logNamespaces')}
            value=${logNamespaces} />
        </div>
      </fieldset>
    </form>
  `
}
