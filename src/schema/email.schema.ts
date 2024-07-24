/**
 * @swagger
 * tags:
 *   name: Send Email Messages
 *   description: API for sending email messages with templates
 */
/**
 * 
 /**@swagger
  * tags:
  *   name: Get Email Templates
  *   description: API for getting email templates
  */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     SendEmailRequest:
 *       type: object
 *       required:
 *         - template_id
 *         - recipient
 *       properties:
 *         template_id:
 *           type: string
 *           description: ID of the email template to use.
 *         recipient:
 *           type: string
 *           description: Email address of the recipient.
 *         variables:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               description: The title of the email.
 *             logoUrl:
 *               type: string
 *               description: URL of the company logo.
 *             imageUrl:
 *               type: string
 *               description: URL of the main image in the email.
 *             userName:
 *               type: string
 *               description: Name of the recipient user.
 *             activationLinkUrl:
 *               type: string
 *               description: URL for account activation.
 *             resetUrl:
 *               type: string
 *               description: URL for password reset.
 *             companyName:
 *               type: string
 *               description: Name of the company.
 *             supportUrl:
 *               type: string
 *               description: URL for customer support.
 *             socialIcons:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   url:
 *                     type: string
 *                     description: URL of the social media page.
 *                   imgSrc:
 *                     type: string
 *                     description: Image source URL of the social media icon.
 *                   alt:
 *                     type: string
 *                     description: Alt text for the social media icon.
 *             companyWebsite:
 *               type: string
 *               description: URL of the company website.
 *             preferencesUrl:
 *               type: string
 *               description: URL to manage email preferences.
 *             unsubscribeUrl:
 *               type: string
 *               description: URL to unsubscribe from emails.
 *     SendEmailResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           description: Response message.
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Indicates if the request was successful.
 *         status_code:
 *           type: integer
 *           description: HTTP status code.
 *         message:
 *           type: string
 *           description: Error message.
 * paths:
 *   /send-email:
 *     post:
 *       summary: Send an email using a specified templae
 *       tags: [Send Email Messages]
 *       security:
 *         - bearerAuth: []
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SendEmailRequest'
 *       responses:
 *         '202':
 *           description: Email sending request accepted and is being processed.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/SendEmailResponse'
 *         '400':
 *           description: Invalid input or template not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *         '404':
 *           description: User not found.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 *   /email-templates:
 *     get:
 *       summary: Retrieve a list of available email templates
 *       tags: [Get Email Templates]
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         '200':
 *           description: List of available email templates.
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Response message.
 *                   templates:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         templateId:
 *                           type: string
 *                           description: ID of the email template.
 *         '500':
 *           description: Internal server error.
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/ErrorResponse'
 */
